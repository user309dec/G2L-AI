/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */

import Editor from '@monaco-editor/react';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import {generateWebApp} from '@/lib/textGeneration';

interface ContentContainerProps {
  contentBasis: string;
  preSeededSpec?: string;
  preSeededCode?: string;
  onLoadingStateChange?: (isLoading: boolean) => void;
}

type LoadingState = 'loading' | 'ready' | 'error';

export default forwardRef(function ContentContainer(
  {
    contentBasis,
    preSeededSpec,
    preSeededCode,
    onLoadingStateChange,
  }: ContentContainerProps,
  ref,
) {
  const [spec, setSpec] = useState<string>(preSeededSpec || '');
  const [code, setCode] = useState<string>(preSeededCode || '');
  const [iframeKey, setIframeKey] = useState(0);
  const [saveMessage, setSaveMessage] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(
    preSeededSpec && preSeededCode ? 'ready' : 'loading',
  );
  const [error, setError] = useState<string | null>(null);
  const [isEditingSpec, setIsEditingSpec] = useState(false);
  const [editedSpec, setEditedSpec] = useState('');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    getSpec: () => spec,
    getCode: () => code,
  }));

  useEffect(() => {
    if (onLoadingStateChange) {
      onLoadingStateChange(loadingState === 'loading');
    }
  }, [loadingState, onLoadingStateChange]);

  useEffect(() => {
    async function generateContent() {
      if (preSeededSpec && preSeededCode) {
        setSpec(preSeededSpec);
        setCode(preSeededCode);
        setLoadingState('ready');
        return;
      }

      try {
        setLoadingState('loading');
        setError(null);
        const {spec: generatedSpec, code: generatedCode} = await generateWebApp(
          contentBasis,
        );
        setSpec(generatedSpec);
        setCode(generatedCode);
        setLoadingState('ready');
      } catch (err) {
        console.error('Error generating web app content:', err);
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred',
        );
        setLoadingState('error');
      }
    }
    generateContent();
  }, [contentBasis, preSeededSpec, preSeededCode]);

  useEffect(() => {
    if (code) {
      setIframeKey((prev) => prev + 1);
    }
  }, [code]);

  useEffect(() => {
    if (saveMessage) {
      const timer = setTimeout(() => setSaveMessage(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [saveMessage]);

  const handleCodeChange = (value: string | undefined) => {
    setCode(value || '');
    setSaveMessage('HTML updated. Changes will appear in the Render tab.');
  };

  const handleSpecEdit = () => {
    setEditedSpec(spec);
    setIsEditingSpec(true);
  };

  const handleSpecSave = async () => {
    // This functionality is now client-side only and doesn't re-generate
    setSpec(editedSpec.trim());
    setIsEditingSpec(false);
    alert('Spec saved locally. To regenerate code, you would need a backend call.');
  };

  const handleSpecCancel = () => {
    setIsEditingSpec(false);
    setEditedSpec('');
  };

  const renderLoadingSpinner = () => (
    <div className="content-placeholder">
      <div className="loading-spinner"></div>
      <p>Generating App...</p>
    </div>
  );

  const renderErrorState = () => (
    <div className="content-placeholder error-message">
      <div style={{fontFamily: 'var(--font-symbols)', fontSize: '5rem'}}>
        error
      </div>
      <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Error</h3>
      <p>{error || 'Something went wrong'}</p>
    </div>
  );

  const renderSpecContent = () => {
    if (loadingState === 'error' && !spec) return renderErrorState();
    if (loadingState === 'loading' && !spec) return renderLoadingSpinner();

    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <div
          style={{
            whiteSpace: 'pre-wrap',
            fontFamily: 'var(--font-technical)',
            lineHeight: 1.75,
            flex: 1,
            overflow: 'auto',
            padding: '1rem 2rem',
          }}
        >
          {spec}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: 'inherit',
        minHeight: 'inherit',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Tabs
        style={{display: 'flex', flexDirection: 'column', height: '100%'}}
        selectedIndex={activeTabIndex}
        onSelect={(index) => setActiveTabIndex(index)}
      >
        <TabList style={{flexShrink: 0}}>
          <Tab>Render</Tab>
          <Tab>Code</Tab>
          <Tab>Spec</Tab>
        </TabList>

        <div style={{flex: 1, overflow: 'hidden', position: 'relative'}}>
          <TabPanel
            style={{height: '100%', width: '100%', position: 'absolute'}}
            selectedClassName="react-tabs__tab-panel--selected"
          >
            {loadingState !== 'ready' ? (
              renderLoadingSpinner()
            ) : (
              <iframe
                key={iframeKey}
                srcDoc={code}
                style={{border: 'none', width: '100%', height: '100%'}}
                title="rendered-html"
                sandbox="allow-scripts"
              />
            )}
          </TabPanel>

          <TabPanel
            style={{height: '100%', width: '100%', position: 'absolute'}}
            selectedClassName="react-tabs__tab-panel--selected"
          >
            {loadingState !== 'ready' ? (
              renderLoadingSpinner()
            ) : (
              <div style={{height: '100%', position: 'relative'}}>
                <Editor
                  height="100%"
                  defaultLanguage="html"
                  value={code}
                  onChange={handleCodeChange}
                  theme="vs-dark"
                  options={{
                    minimap: {enabled: false},
                    fontSize: 14,
                    wordWrap: 'on',
                  }}
                />
                {saveMessage && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                    }}
                  >
                    {saveMessage}
                  </div>
                )}
              </div>
            )}
          </TabPanel>

          <TabPanel
            style={{height: '100%', width: '100%', position: 'absolute'}}
            selectedClassName="react-tabs__tab-panel--selected"
          >
            {renderSpecContent()}
          </TabPanel>
        </div>
      </Tabs>
      <style>{`
        /* react-tabs basic styling */
        .react-tabs {
          -webkit-tap-highlight-color: transparent;
        }
        .react-tabs__tab-list {
          border-bottom: 1px solid #aaa;
          margin: 0;
          padding: 0;
          display: flex;
        }
        .react-tabs__tab {
          display: inline-block;
          border: 1px solid transparent;
          border-bottom: none;
          bottom: -1px;
          position: relative;
          list-style: none;
          padding: 6px 12px;
          cursor: pointer;
        }
        .react-tabs__tab--selected {
          background: light-dark(#fff, #2f2f33);
          border-color: #aaa;
          color: light-dark(#000, #fff);
          border-radius: 5px 5px 0 0;
        }
        .react-tabs__tab--disabled {
          color: GrayText;
          cursor: default;
        }
        .react-tabs__tab:focus {
          box-shadow: 0 0 5px hsl(208, 99%, 50%);
          border-color: hsl(208, 99%, 50%);
          outline: none;
        }
        .react-tabs__tab:focus:after {
          content: "";
          position: absolute;
          height: 5px;
          left: -4px;
          right: -4px;
          bottom: -5px;
          background: #fff;
        }
        .react-tabs__tab-panel {
          display: none;
        }
        .react-tabs__tab-panel--selected {
          display: block;
        }
      `}</style>
    </div>
  );
});
