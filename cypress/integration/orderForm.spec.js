describe("Pizza App", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })
const homeBtn = () => cy.get("button[id=home-btn]")
const nameTextInput = () => cy.get("input[name=name]");
const dropdown = () => cy.get("select[name=size]");
const pepperoniBox = () => cy.get("input[name=pepperoni]");
const sausageBox = () => cy.get("input[name=sausage]");
const spicySausageBox = () => cy.get("input[name=spicyItalianSausage]");
const chickenBox = () => cy.get("input[name=grilledChicken]");
const canadianBaconBox = () => cy.get("input[name=canadianBacon]");
const tomatosBox = () => cy.get("input[name=dicedTomatos]");
const blackOlivesBox = () => cy.get("input[name=blackolives]");
const jalapenosBox = () => cy.get("input[name=jalapenos]");
const roastedGarlicBox = () => cy.get("input[name=roastedGarlic]");
const pineappleBox = () => cy.get("input[name=pineapple]");
const specialTextinput = () => cy.get("input[name=instructions]");
const submitBtn = () => cy.get("button[id=order-button]");


it("the proper elements are showing", () => {
    homeBtn().should("exist");
    nameTextInput().should("exist");
    dropdown().should("exist");
    pepperoniBox().should("exist");
    sausageBox().should("exist");
    spicySausageBox().should("exist");
    chickenBox().should("exist");
    canadianBaconBox().should("exist");
    tomatosBox().should("exist");
    blackOlivesBox().should("exist");
    jalapenosBox().should("exist");
    roastedGarlicBox().should("exist");
    pineappleBox().should("exist");
    specialTextinput().should("exist");
    submitBtn().should("exist");
})

describe("Filling out the inputs", () => {
    it("can type in the inputs", () => {
        nameTextInput().should("have.value", "").type("Test name input").should("have.value", "Test name input");
        specialTextinput().should("have.value", "").type("Test special instructions input").should("have.value","Test special instructions input");
    })
})













})