import { registerWebComponents } from "./register";
import { injectChat77submoduleInWindow, parseChat77submodule } from "./window";

registerWebComponents();

const chat77submodule = parseChat77submodule();

injectChat77submoduleInWindow(chat77submodule);

export default chat77submodule;
