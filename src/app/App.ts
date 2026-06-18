import "../core/material/MaterialElements";
import WebComponent from "../core/webcomponents/WebComponent";
import ExampleFeature from "../features/example-feature/presentation/ExampleFeature";
import html from "./App.html?raw";
import styles from "./App.scss?raw";

export default class App extends WebComponent {
	constructor() {
		super(html, styles);
	}

	get htmlTagName(): string {
		return "material-tools-app";
	}

	onConnected(): void {
		this.select("#example-feature-slot")!.append(new ExampleFeature());
	}
}
