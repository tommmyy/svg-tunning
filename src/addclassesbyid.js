import cx from 'classnames';
import { DOMParser, XMLSerializer } from 'xmldom';

export default function (svgInput, mappings) {
  return new Promise((resolve) => {
    const doc = new DOMParser().parseFromString(svgInput, 'text/xml').documentElement;

    const nodes = doc.getElementsByTagName('*');

    Array.from(nodes).forEach((el) => {
      const id = el.getAttribute('id');
      if (id) {
        let mapping;
        if (mappings && mappings.hasOwnProperty(id)) {
          mapping = mappings[id];
        }
        /* eslint-disable no-param-reassign */
        el.setAttribute('class', cx(el.getAttribute('class'), id, mapping));
        /* eslint-enable no-param-reassign */
      }
    });
    resolve(new XMLSerializer().serializeToString(doc));
  });
}
