import WebComponent from "../../../core/webcomponents/WebComponent";
import GetExampleMessageUseCase from "../domain/GetExampleMessageUseCase";
import html from "./ExampleFeature.html?raw";
import styles from "./ExampleFeature.scss?raw";

export default class ExampleFeature extends WebComponent {
	private count = 0;

	constructor(private readonly getExampleMessage = new GetExampleMessageUseCase()) {
		super(html, styles);
	}

	get htmlTagName(): string {
		return "example-feature";
	}

	onConnected(): void {
		const message = this.getExampleMessage.execute();
		this.select("#example-feature-title")!.textContent = message.title;
		this.select("#example-feature-body")!.textContent = message.body;

		const button = this.select("#example-action")!;
		button.textContent = message.buttonLabel;
		button.addEventListener("click", this.onButtonClick);
	}

	private onButtonClick = () => {
		this.count += 1;
		this.select("#count")!.textContent = this.count.toString();
	};
}
