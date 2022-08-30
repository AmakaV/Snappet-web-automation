/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("User Authentication", () => {
  beforeEach(() => {
    // Preserve authentication cookies
    Cypress.Cookies.defaults({
      preserve: (cookie) => {
        return true;
      },
    });
  });
  describe("Visit teachers url", () => {
    it("url should load successfully", () => {
      cy.visit("https://teacher.snappet.org");
    });
  });
  describe("Login", () => {
    it("user should be able to login in successfully by entering username and password", () => {
      cy.get("input#Input_Username.form-control")
        .type("TechChallengeTeacher")
        .should("have.value", "TechChallengeTeacher");
      cy.get("input#password-input.form-control")
        .type("P@ssw0rd")
        .should("have.value", "P@ssw0rd");
      cy.get(".btn").click();
    });
  });
});

describe("Activate subject", () => {
  it("user should be able to click on the add subject button", () => {
    cy.get(".subject-option").click();
    cy.get("add-subject-button").click();
  });

  it("user should be able to select the subject to activate and click next", () => {
    cy.get("dropdown.initialized").click();
    cy.get(
      "span.select2-container.select2-container--default.select2-container--open"
    )
      .contains("Taal")
      .click();
    cy.get("a.btn.btn-primary").contains("Next").click();
  });

  it("user should be able to select the group level and click next", () => {
    cy.get(".inner-grade-slider-tick").contains(5).click();
    cy.get("a.btn.btn-primary").contains("Next").click();
  });

  it("user should be able to select from group suggestions", () => {
    cy.get("div.card.default").eq(3).click();
  });

  it("user should be able to click the activate subject button", () => {
    cy.get("div.button-bar.stretch").contains("Activate subject").click();
  });
});

describe("User edits subject name and grade", () => {
  it("user should be able to click the subject edit button succesfully", () => {
    cy.get(".subject-container")
      .find("subjectgroup-info-block")
      .last()
      .then((subjectEditModal) => {
        cy.wrap(subjectEditModal).find(".btn.btn-txt").click();
      });
  });

  it("user should be able to change subject name  and grade successfully", () => {
    cy.get(".panel-card.secondary").then((editForm) => {
      cy.wrap(editForm).find("input").clear().type("Amstaal");
      cy.wrap(editForm).find(".selection").click();
      cy.get(".select2-dropdown.select2-dropdown--below")
        .contains("Groep 8")
        .click();
      cy.wrap(editForm).find("button.btn.btn-primary").contains("Save").click();
    });
  });
});
