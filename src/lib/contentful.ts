import { createClient, Asset } from 'contentful';

// Contentful client configuration
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master'
});

export default client;

// Helper function to get optimized image URL
export const getOptimizedImageUrl = (asset: Asset, width?: number, quality: number = 75) => {
  if (!asset?.fields?.file?.url) return '';
  
  const url = typeof asset.fields.file.url === 'string' ? asset.fields.file.url : '';
  if (!url) return '';
  
  const baseUrl = url.startsWith('//') 
    ? `https:${url}` 
    : url;
    
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());
  params.set('f', 'webp');
  
  return `${baseUrl}`;
};

// Helper function to get asset URL
export const getAssetUrl = (asset: Asset) => {
  if (!asset?.fields?.file?.url) return '';
  
  const url = typeof asset.fields.file.url === 'string' ? asset.fields.file.url : '';
  if (!url) return '';
  
  return url.startsWith('//') 
    ? `https:${url}` 
    : url;
};
