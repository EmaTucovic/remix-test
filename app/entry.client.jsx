// Hydration refers to the process of filling an object with data.
// An object which has not yet been hydrated has been instantiated and represents an entity that does have data,
// but the data has not yet been loaded into the object.
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

// https://blog.saeloun.com/2021/12/16/hydration.html
// ReactDOM.render(element, container[, callback])
// ReactDOM.hydrate(element, container[, callback])
// hydrate() is the same as render() but is used to hydrate
// a container whose HTML contents were rendered by ReactDOMServer.
// React will attempt to attach event listeners to the existing markup.
hydrate(<RemixBrowser />, document);
