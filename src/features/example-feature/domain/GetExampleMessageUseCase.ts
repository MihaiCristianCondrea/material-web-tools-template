import type { ExampleMessage } from "./ExampleMessage";

export default class GetExampleMessageUseCase {
	execute(): ExampleMessage {
		return {
			title: "Starter feature",
			body: "Rename src/features/example-feature when you build your first real tool.",
			buttonLabel: "Click the example button",
		};
	}
}
