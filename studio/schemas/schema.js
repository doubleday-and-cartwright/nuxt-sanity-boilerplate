// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import settingsGeneral from './documents/settingsGeneral'
import settingsFooter from './documents/settingsFooter'
import page from './documents/page'
import project from './documents/project'
// Objects
import seo from './objects/seo'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    /* Add new types here */
    settingsGeneral,
    settingsFooter,
    page,
    project,
    seo
  ]),
})
