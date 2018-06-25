export class GeneratorModel {
    constructor() {
        this.acls = [];
        this.hidden = [];
        this.methods = [];
        this.validations = [];
        this.selectTabName = GeneratorSteps.general;
        this.properties = {};
        this.name = '';
        this.description = '';
        this.base = 'PersistedModel';
    }
    name: string; // See Top-level properties below
    description: string;
    selectTabName: GeneratorSteps;
    base: string;
    idInjection: boolean;
    forced: boolean;
    pural: string;
    strict: boolean;
    options: any; // See Options below - can also declare as top-level properties
    properties: PropertiesModel; // See Properties below
    hidden: any[]; // See Hidden properties below
    validations: any[]; // See Validations below
    relations: any;  // See Relations below
    acls: any[];  // See ACLs below
    scopes: any;  // See Scopes below
    indexes: any; // See Indexes below
    methods: any[];  // See Methods below
    remoting: any;
    http: any;
}

export enum GeneratorSteps {
    general,
    properties,
    relatons
}

export enum DataTypes {
    Any,
    Boolean,
    Number,
    String,
}

export class PropertiesModel {
    [key: string]: TypeDef | string | any;
}


export class TypeDef {
    type: string;
    required?: boolean;
    length?: number;
    default?: any; // Should be same as defined type
    description?: string;
    id?: boolean;
    index?: boolean;
    max?: number;
    min?: number;
    pattern?: string;
}

export class SimplePropertiesModel {

    constructor() {
        this.definition = new TypeDef();
        this.name = '';
    }

    definition: TypeDef;
    name: string;
}
