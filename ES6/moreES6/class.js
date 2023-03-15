class TeamMember {
    name;
    location;
    constructor(name , location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} Thank you for your feedback.`)
    }
}
class Instructor extends TeamMember {
    designation = 'web course'
    team = 'web team'
    constructor (name, location){
        super(name, location)
    }
    startSupportSession (time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz (module){
        console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web Developer'
    tech;
    constructor (name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    developFeature (feature){
        console.log(`Please develop the ${feature}`)
    }
    release (version){
        console.log(`Please Release the version ${version}`)
    }
 
}

class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor (name, location, region){
        super(name, location)
        this.region = region;
    }
    developFeature (feature){
        console.log(`Please develop the ${feature}`)
    }
    release (version){
        console.log(`Please Release the version ${version}`)
    }
 
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React')
console.log(alia)
alia.provideFeedback();
const bipasha = new JobPlacement ('bipasha', 'india', 'india')
console.log(bipasha)


















// const amir = new Instructor('amir', 'dhaka');
// console.log(amir)

// amir. startSupportSession('9 : 00')
// amir. createQuiz(60)
// const solaiman = new Instructor ('solaiman', 'dhaka')
// console.log(solaiman) 