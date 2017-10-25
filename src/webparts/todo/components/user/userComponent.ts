import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import UserItem from '../user-item/Useritem.vue';
import { User } from '../../core/model/user';
import { NationalityDataService } from '../../core/data-service/nationality-data-service';

@Component({
    components: {
        'user-item': UserItem as Vue.Component,
    },
})
export default class UserComponent extends Vue {
    public myUsers: User[] = [];
    public userTitle: string = '';
    public nationalityText: string = '';
    public message: string = 'Users';
    public addUser(): void {
        if (!this.userTitle) {
            return;
        }
        this.myUsers.push({ name: this.userTitle, nationality: this.nationalityText });
        this.userTitle = '';
    }

    get nationalities(): String[] {
        return NationalityDataService.getNationalities();
    }
}

// @Component({
//     components: {
//         'todo-item': TodoItem as Vue.Component,
//     },
// })
