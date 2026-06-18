import App from "./App";
import DataServices from "./DataServices";
import GlobalState from "../core/state/GlobalState";

async function bootstrap() {
	await DataServices.init();
	await GlobalState.init();
	document.querySelector<HTMLDivElement>("#app")!.replaceChildren(new App());
}

bootstrap().catch((error) => {
	console.error("Failed to start Material Web Tools Template", error);
});
