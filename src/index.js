import _ from 'lodash';
    
if (process.env.NODE_ENV == 'development') {
    console.log('Looks like we are in development mode!');
  }

  if (process.env.NODE_ENV == 'production') {
    console.log('Looks like we are in production mode!');
  }

function component() {
    console.log(process.env.NODE_ENV )
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Taif vux'], ' ');

    return element;
}

document.body.appendChild(component());
