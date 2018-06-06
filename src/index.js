import ReactDOMServer from 'react-dom/server';
import mjml2html from 'mjml';

export {render, renderToMjml};

export {Mjml} from './mjml';
export {MjmlHead} from './mjml-head';
export {MjmlBody} from './mjml-body';
export {MjmlBreakpoint} from './mjml-breakpoint';
export {MjmlFont} from './mjml-font';
export {MjmlPreview} from './mjml-preview';
export {MjmlStyle} from './mjml-style';
export {MjmlTitle} from './mjml-title';
export {MjmlRaw} from './mjml-raw';
export {MjmlSection} from './mjml-section';
export {MjmlColumn} from './mjml-column';
export {MjmlButton} from './mjml-button';
export {MjmlDivider} from './mjml-divider';
export {MjmlImage} from './mjml-image';

function render(email, options = {}) {
  const defaults = {
    keepComments: false,
    beautify: false,
    minify: true,
    validationLevel: 'strict'
  };
  return mjml2html(renderToMjml(email), {...defaults, ...options});
}

function renderToMjml(email) {
  return ReactDOMServer.renderToStaticMarkup(email);
}