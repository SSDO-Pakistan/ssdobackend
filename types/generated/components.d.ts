import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'image';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    sociallink: Attribute.Component<'shared.link', true>;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seoInformation';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.RichText;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'anchor';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    iconClass: Attribute.String;
  };
}

export interface SharedProfile extends Schema.Component {
  collectionName: 'components_shared_profiles';
  info: {
    displayName: 'Profile';
    description: '';
  };
  attributes: {
    position: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    sociallinks: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedReport extends Schema.Component {
  collectionName: 'components_shared_reports';
  info: {
    displayName: 'Report';
    description: '';
  };
  attributes: {
    cover: Attribute.Media;
    file: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.hero': LayoutHero;
      'seo.seo-information': SeoSeoInformation;
      'shared.link': SharedLink;
      'shared.profile': SharedProfile;
      'shared.report': SharedReport;
    }
  }
}
