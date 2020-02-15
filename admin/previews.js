import { Home } from './preview-templates/home'
import { Post } from './preview-templates/posts'
import { Page } from './preview-templates/page'
import { SiteData } from './preview-templates/site-data'
import { Nav } from './preview-templates/nav'

CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('posts', Post);
CMS.registerPreviewTemplate('generic_pages', Page);
CMS.registerPreviewTemplate('site_data', SiteData);
CMS.registerPreviewTemplate('nav', Nav);
