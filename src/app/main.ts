import App from "./App";
import DataServices from "./DataServices";
import GlobalState from "../core/state/GlobalState";

async function bootstrap() {
	await DataServices.init();
	await GlobalState.init();

	try {
		await import("../core/material/MaterialElements");
	} catch (error) {
		console.warn("Material Web components failed to load; rendering the app with native fallback markup.", error);
	}

	document.querySelector<HTMLDivElement>("#app")!.replaceChildren(new App());
}

bootstrap().catch((error) => {
	console.error("Failed to start Material Web Tools Template", error);
});
