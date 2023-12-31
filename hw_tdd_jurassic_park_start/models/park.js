class Park {
    constructor(arrayOfDinosaurs = [], ticketPrice, name) {
        this.arrayOfDinosaurs = arrayOfDinosaurs
        this.ticketPrice = ticketPrice
        this.name = name
    }
    addDinosaur(dinosaurToAdd) {
        this.arrayOfDinosaurs.push(dinosaurToAdd)
    }
    removeDinosaur(dinosaurToRemove){
        const toRemove = this.arrayOfDinosaurs.indexOf(dinosaurToRemove);
        this.arrayOfDinosaurs.splice(toRemove, 1);
    }
    mostPopularDinosaur(){
        let mostPopular = this.arrayOfDinosaurs[0]
        for (let i = 0; i < this.arrayOfDinosaurs.length; i++){
            if (mostPopular.guestsAttractedPerDay < this.arrayOfDinosaurs[i].guestsAttractedPerDay) {
                mostPopular = this.arrayOfDinosaurs[i]
            }
        }
        return mostPopular
    }
    findDinosaurBySpecies(speciesToFind){
        const arrayOfDinosaursBySpecies = []
        for (let i = 0; i < this.arrayOfDinosaurs.length; i++){
            if (this.arrayOfDinosaurs[i].species === speciesToFind){
                arrayOfDinosaursBySpecies.push(this.arrayOfDinosaurs[i])
            }
        }
        return arrayOfDinosaursBySpecies
    }
    totalNumberOfVisitorsPerDay(){
        let totalVisitors = 0
        for (let i = 0; i < this.arrayOfDinosaurs.length; i++){
            totalVisitors += this.arrayOfDinosaurs[i].guestsAttractedPerDay
        }
        return totalVisitors
    }
    totalNumberOfVisitorsPerYear(){
        return (this.totalNumberOfVisitorsPerDay() * 365)
    }
    totalRevenueFromTicketsYearly(){
        return (this.totalNumberOfVisitorsPerYear() * this.ticketPrice)
    }
    removeAllDinosaursBySpecies(speciesToRemove) {
        for (let i = this.arrayOfDinosaurs.length - 1; i >= 0; i--) {
            if (this.arrayOfDinosaurs[i].species === speciesToRemove) {
                this.arrayOfDinosaurs.splice(i, 1);
            }
        }
    }
    sortDinosaursByDiet(){
        const arrayOfCarnivores = []
        const arrayOfHerbivores = []
        const arrayOfOmnivores = []
        for (let i = 0; i < this.arrayOfDinosaurs.length; i++){
            if (this.arrayOfDinosaurs[i].diet === "carnivore"){
                arrayOfCarnivores.push(this.arrayOfDinosaurs[i])
            } else if (this.arrayOfDinosaurs[i].diet === "herbivore"){
                arrayOfHerbivores.push(this.arrayOfDinosaurs[i])
            } else {
                arrayOfOmnivores.push(this.arrayOfDinosaurs[i])
            }
        }
        const sortedDinosaurs = {"carnivores": arrayOfCarnivores.length, "herbivores": arrayOfHerbivores.length, "omnivores": arrayOfOmnivores.length}
        return sortedDinosaurs
    }
}




module.exports = Park