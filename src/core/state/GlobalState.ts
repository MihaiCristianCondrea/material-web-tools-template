import State from "./State";

export default class GlobalState {
	private static _states: Map<string, State<any>> = new Map<string, State<any>>();

	public static async init(): Promise<void> {
		this._states.clear();
	}

	public static addState(state: State<any>): void {
		this._states.set(state.id, state);
	}

	public static getStateById<T, S extends State<T>>(id: string): S | undefined {
		return this._states.get(id) as S;
	}

	public static findState<T, S extends State<T>>(
		predicate: (value: T) => boolean,
		classConstructor: new (...args: any[]) => T
	): S | undefined {
		for (const state of this._states.values()) {
			if (state.value instanceof classConstructor && predicate(state.value)) {
				return state as S;
			}
		}
		return undefined;
	}

	public static findStates<T, S extends State<T>>(
		predicate: (value: T) => boolean,
		classConstructor: new (...args: any[]) => T
	): S[] {
		const states: S[] = [];
		for (const state of this._states.values()) {
			if (state.value instanceof classConstructor && predicate(state.value)) {
				states.push(state as S);
			}
		}
		return states;
	}
}
