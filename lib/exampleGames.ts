/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */

export interface GeneratedGame {
  name: string;
  subject: string;
  imageUrl: string;
}

// Pre-generated example games to avoid hitting API rate limits at runtime.
export const exampleGamesBySubject: {[key: string]: GeneratedGame[]} = {
  'Artificial Intelligence': [
    {
      name: 'Neural Net Navigator',
      subject: 'Artificial Intelligence',
      imageUrl: 'https://images.unsplash.com/photo-1678483749293-47796919016c?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Algorithm Arena',
      subject: 'Artificial Intelligence',
      imageUrl: 'https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-2da8-622f-81a9-8b7adc6b7648/raw?se=2025-09-21T02%3A57%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=8da783fc-3d49-5685-ac42-2f4e695c3342&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-20T11%3A54%3A51Z&ske=2025-09-21T11%3A54%3A51Z&sks=b&skv=2024-08-04&sig=UARXONDY52U2but0sl4PNLOaRug%2B55cU56aYt5AeZx4%3D',
    },
    {
      name: 'Data Detective',
      subject: 'Artificial Intelligence',
      imageUrl: 'https://sdmntprcentralus.oaiusercontent.com/files/00000000-e370-61f5-bc7a-9c3222a95d9d/raw?se=2025-09-21T03%3A02%3A29Z&sp=r&sv=2024-08-04&sr=b&scid=54ffccf7-50d5-541d-abc1-3828ea51faf8&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-20T19%3A48%3A18Z&ske=2025-09-21T19%3A48%3A18Z&sks=b&skv=2024-08-04&sig=EFTpi7Vg7CI4e7aSpkY5zDCquCZH3MC49WZJyhYSV%2BA%3D',
    },
  ],
  'Computer Science': [
    {
      name: 'The Pythonic Quest',
      subject: 'Computer Science',
      imageUrl: 'https://sdmntprwestus3.oaiusercontent.com/files/00000000-ce08-61fd-951e-f85614993c22/raw?se=2025-09-21T02%3A35%3A29Z&sp=r&sv=2024-08-04&sr=b&scid=dd9c4ae3-2416-5e22-978d-753ad95b769a&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-21T01%3A16%3A07Z&ske=2025-09-22T01%3A16%3A07Z&sks=b&skv=2024-08-04&sig=qBGwLATYXtNt9AVe%2BZHWLhFjFlLooCHKcgiN8rYnZOc%3D',
    },
    {
      name: 'Bug Hunter',
      subject: 'Computer Science',
      imageUrl: 'https://images.unsplash.com/photo-1678553222372-a083a33941a3?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Binary Bridge Builder',
      subject: 'Computer Science',
      imageUrl: 'https://images.unsplash.com/photo-1678553222329-679e7a8a1f73?q=80&w=400&auto=format&fit=crop',
    },
  ],
  'History': [
    {
      name: 'The Hieroglyph Cipher',
      subject: 'History',
      imageUrl: 'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-4760-61f7-9703-01f7fed298ca/raw?se=2025-09-21T02%3A45%3A55Z&sp=r&sv=2024-08-04&sr=b&scid=ed3bd12c-236b-56ef-a6bc-969da5a7c8fe&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-20T19%3A48%3A33Z&ske=2025-09-21T19%3A48%3A33Z&sks=b&skv=2024-08-04&sig=FcIjMmQsLyvELp1AhWkC/Y3WiYyNqWL7oehf06Hfe%2B8%3D',
    },
    {
      name: 'Timeline Traveler',
      subject: 'History',
      imageUrl: 'https://images.unsplash.com/photo-1678553222438-a0d33e1a0b3f?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Empire Architect',
      subject: 'History',
      imageUrl: 'https://images.unsplash.com/photo-1620356345157-b92472b5d40a?q=80&w=400&auto=format&fit=crop',
    },
  ],
   'Mathematics': [
    {
      name: 'Calculus Coaster',
      subject: 'Mathematics',
      imageUrl: 'https://images.unsplash.com/photo-1635070045041-38f21d8a8a44?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Fractal Explorer',
      subject: 'Mathematics',
      imageUrl: 'https://sdmntprwestus3.oaiusercontent.com/files/00000000-7c64-61fd-b4bd-6962a2b25261/raw?se=2025-09-21T02%3A41%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=dd6d208a-41d2-5d47-a787-e9b2f6084dd8&skoid=9ccea605-1409-4478-82eb-9c83b25dc1b0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-20T19%3A46%3A31Z&ske=2025-09-21T19%3A46%3A31Z&sks=b&skv=2024-08-04&sig=mNqJ0o9WhA9mVrwzSV57GjldAQllWl/LQJZcvRBAmlQ%3D',
    },
    {
      name: 'Probability Plinko',
      subject: 'Mathematics',
      imageUrl: 'https://images.unsplash.com/photo-1635070044243-90623a38f32c?q=80&w=400&auto=format&fit=crop',
    },
  ],
   'Statistics': [
     {
      name: 'Probability Blocks',
      subject: 'Statistics',
      imageUrl: 'https://images.unsplash.com/photo-1599658880110-10b34731b8a5?q=80&w=400&auto=format&fit=crop',
     }
   ],
};