import { INIT_STATE } from '../../constants';
import { getType, turnOnNavbar, turnOffNavbar } from '../actions';

export default function navbarReducers(state = INIT_STATE.navbar, action) {
    switch (action.type) {
        case getType(turnOnNavbar):
            return {
                turnNav: true,
            };
        case getType(turnOffNavbar):
            return {
                turnNav: false,
            };
        default:
            return state;
    }
}