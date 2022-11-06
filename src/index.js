import {changeH1} from './text';
//hello()
 changeH1("hot reload!!")
 if (module.hot) module.hot.accept()

// if (module.hot) {
//     module.hot.accept('./text.js', function() {
//       console.log('Accepting the updated printMe module!');
//       changeH1("hot fgggggggggg!!")
//     })
//   }

