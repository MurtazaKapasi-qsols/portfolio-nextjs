import { Asset, EntryCollection, EntrySkeletonType } from 'contentful';

// Base Contentful types
export interface ContentfulAsset extends Asset {
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

// Portfolio Project Content Type - Updated to match actual Contentful structure
export interface PortfolioProjectFields {
  title: string;
  projectThumbnail?: ContentfulAsset;
  sortingOrder?: number;
  // Optional fields that might be added later
  slug?: string;
  description?: string;
  category?: string;
  featuredImage?: ContentfulAsset;
  gallery?: ContentfulAsset[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  projectDate?: string;
  status?: string;
  featured?: boolean;
  displayOrder?: number;
}

export interface TestimonialsFields {
  name: string;
  designation: string;
  company: string;
  content: string;
  image: ContentfulAsset;
}

// Create a proper skeleton type for Contentful
export interface PortfolioProjectSkeleton extends EntrySkeletonType {
  contentTypeId: 'portfolioProjects';
  fields: PortfolioProjectFields;
}
export interface TestimonialsSkeleton extends EntrySkeletonType {
  contentTypeId: 'testimonials';
  fields: TestimonialsFields;
}

// Create a practical type that works with the existing code
export interface PortfolioProject {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    revision: number;
    contentType: {
      sys: {
        id: 'portfolioProjects';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
    locale: string;
  };
  fields: PortfolioProjectFields;
  metadata: {
    tags: Array<{
      sys: {
        type: 'Link';
        linkType: 'Tag';
        id: string;
      };
    }>;
  };
}
export interface Testimonials {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    revision: number;
    contentType: {
      sys: {
        id: 'testimonials';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
    locale: string;
  };
  fields: TestimonialsFields;
  metadata: {
    tags: Array<{
      sys: {
        type: 'Link';
        linkType: 'Tag';
        id: string;
      };
    }>;
  };
}

// Use the actual Contentful response type
export type ContentfulResponse<T extends EntrySkeletonType> = EntryCollection<T>;

// Query parameters for fetching portfolio projects
export interface PortfolioQuery {
  limit?: number;
  skip?: number;
  order?: string;
  'fields.category'?: string;
  'fields.featured'?: boolean;
  'fields.status'?: string;
}

