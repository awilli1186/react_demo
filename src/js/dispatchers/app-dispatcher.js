import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    handleServerAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

    handleViewAction(action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    }
}

export default new AppDispatcher();
