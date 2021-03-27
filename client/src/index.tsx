import './styles/reset.sass';
import './styles/main.sass';

import React from 'react';
import ReactDom from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Sample } from './components';

/*
  TODO

  Grid Areas:
    side main main
    side main main
    side main main

  - Notes:
    - Create a note
      - in Notes View, click 'New Note' btn
    - View a note
      - in Notes View, click title
    - Edit a note
      - in Notes View, click 'Edit Note' btn
      - in Note View, click 'Edit Note' btn then return to Note View
    - Delete a note
      - in Notes View, click 'Delete Note' btn
      - in Note View, click 'Delete Note' btn then return to Notes View
  
  - Tags
    - Create a tag
      - in Edit Note View, if tag doesn't exist
      - in Tags View, click '+' btn
    - View a tag
      - No views for a tag, instead open Notes View with filter for the tag
      - Tags are displayed on the left side (Tags View)
    - Edit a tag
      - in Tags View, click 'Edit Tag' btn
    - Delete a tag
      - in Tags View, click 'Delete Tag' btn
*/

library.add(fab);
library.add(far);
library.add(fas);

ReactDom.render(
  (
    <Sample/>
  ),
  document.getElementById('root')
);
