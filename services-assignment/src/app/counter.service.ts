export class CounterService {
    activeToInactive = 0;
    inactiveToActive = 0;

    incrementActiveToInactive() {
        this.activeToInactive++;
        console.log('active to inactive: ' + this.activeToInactive)
    }
    incrementInactiveToActive() {
        this.inactiveToActive++;
        console.log('inactive to active: ' + this.inactiveToActive)
    }
}