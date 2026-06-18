import WebComponent from "./WebComponent";

export default class WebComponentLoader {
	private static componentDefinitions: ComponentDefinition[] = [];

	public static async loadAll(): Promise<void> {
		const modules = import.meta.glob("../../features/**/presentation/*.ts");
		for (const loadModule of Object.values(modules)) {
			const module = (await loadModule()) as { default?: CustomElementConstructor };
			const componentClass = module.default;
			if (componentClass && componentClass.prototype instanceof WebComponent) {
				const element = Object.create(componentClass.prototype) as WebComponent;
				WebComponentLoader.addComponentDefinition(
					new ComponentDefinition(element.htmlTagName, componentClass)
				);
			}
		}
		WebComponentLoader.defineAll();
	}

	private static addComponentDefinition(componentDefinition: ComponentDefinition): void {
		if (componentDefinition.name.includes("-")) {
			this.componentDefinitions.push(componentDefinition);
		}
	}

	private static defineAll(): void {
		this.componentDefinitions.forEach((componentDefinition) =>
			componentDefinition.defineSelf()
		);
	}
}

class ComponentDefinition {
	constructor(
		public name: string,
		public componentConstructor: CustomElementConstructor
	) {}

	public defineSelf(): void {
		if (!customElements.get(this.name)) {
			customElements.define(this.name, this.componentConstructor);
		}
	}
}
