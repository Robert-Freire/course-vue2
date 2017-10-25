import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-webpart-base';

import * as Vue from 'vue';
import VueRouter from 'vue-router';

import MainComponent from './containers/main/main.vue';
import * as strings from 'toDoStrings';
import { ITodoWebPartProps } from './ITodoWebPartProps';
import RouterFactory from './router/index';

export default class TodoWebPart extends BaseClientSideWebPart<ITodoWebPartProps> {
    public data: ITodoWebPartProps;

    public render(): void {
        this.domElement.innerHTML = `
      <div id="app-${this.context.instanceId}">
      </div>`;

        this.data = {
            message: this.properties.message,
        };

        Vue.use(VueRouter);
        var router = RouterFactory.create();
        new Vue({
            el: `#app-${this.context.instanceId}`,
            router,
            render: h =>
                h(MainComponent, {
                    props: this.data,
                }),
        });
        router.replace('/');
    }

    public onBeforeSerialize(): any {
        this.properties.message = this.data.message;
        return undefined;
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('message', {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    }
}
