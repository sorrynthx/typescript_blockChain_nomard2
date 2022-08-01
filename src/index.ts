import {exit, init} from "./myPackage";

var config = {
    debug: false,
    url: 'http://localhost:'
}

init(config);
exit(1);