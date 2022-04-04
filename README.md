# Nuxt.js / Sanity / Vercel Boilerplate

## Dependencies
Install the Sanity CLI
```bash
$ npm install -g @sanity/cli
```

## Creating a New Project
### Git
Before making a copy of the repository, check for and resolve any automated PRs.

**Note:** Some PRs updates may be associated with Nuxt 3 compatibility. **Nuxt 3 is still in beta** so those updates should be ignored, for now.

Once any existing PRs have been merged, fork this repository to your preferred location, or use Import to make a copy: https://github.com/new/import

Clone the new repository so you have a local copy.
```bash
$ git clone https://github.com/username/new-project.git
```

CD into the cloned repo and install dependencies.
```bash
$ cd new-project
$ npm install
```

### Sanity
From the local project's root directory,
```bash
$ cd studio
$ sanity init
```
Answer the prompts as follows:

The current folder contains a configured Sanity studio. Would you like to reconfigure it? __Yes__  
Select project to use __Create new project__  
Your project name: __[New Project Name Here]__  
Use the default dataset configuration? __Yes__

To see the Sanity project ID, use
```bash
$ sanity projects list
```
or visit your Sanity dashboard at sanity.io

Create an .env  file in the root directory, and include the following variable:  
``
SANITY_PROJECT_ID="your-sanity-id-here"
``

From the Sanity dashboard, in API, add the following CORS origins, for local development:
- http://localhost:3000

### Vercel
Make sure that the Vercel GitHub app is installed for your user or organization in Settings > Installed GitHub Apps, and that it has permission to access the repository created above.

Create a new project on https://vercel.com/

Import the git repository created above.

Ensure the Framework Preset is Nuxt.js

Override __Build & Development Settings > Build Command__: `npm run generate`

In Environment Variables, add
- Name: __SANITY_PROJECT_ID__
- Value: __[your-sanity-id-here]__

__Deploy__

### Connecting Sanity & Vercel
Now that the site is deployed on Vercel, add its URL to the list of allowed CORS origins on Sanity.

Using webhooks, we can ensure that our static site built by nuxt generate will always be rebuilt whenever any CMS content is updated.
#### Vercel
Project > Settings > Git > Deploy Hooks

Create Hook

Name: __Sanity Update__
Branch: __main__

__Create Hook__

Copy the generated URL for use in the steps below, i.e.
https://api.vercel.com/v1/integrations/deploy/abc_xyzABcDEFGhiJkLmNOPQRS12345/abcdef34210

#### Sanity
Project > API > Webhooks > GROQ-powered Webhooks

Create Webhook

Name: __Rebuild Static Site__
URL: __URL from above, i.e. https://api.vercel.com/v1/integrations/deploy/abc_xyzABcDEFGhiJkLmNOPQRS12345/abcdef34210__
Dataset: __* (all datasets)__
Trigger on: __Create Update Delete__

Leave all others default

__Save__

### Testing
To test the setup, modify a file, such as the home page, commit, and push.  
This should trigger a rebuild on Vercel, and changes should be reflected at the production URL after a few minutes.  
Try updating the CMS via http://localhost:3333 or https://new-project.vercel.app/studio. Updating the CMS should trigger a rebuild of the static site as well.

### Cleaning up
Change the name attribute in package.json to new-project

:fire::fire::fire:Delete the instructions above from the README :fire::fire::fire:
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Nuxt.js Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
