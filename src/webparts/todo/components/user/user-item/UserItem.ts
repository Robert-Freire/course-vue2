import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { User } from '../../../core/model/user';

@Component
export default class UserItem extends Vue {
    @Prop() public user: User;
}
