import reducer, { updatedQuestionOne, updatedQuestionTwo, updatedQuestionThree } from './formContent';

describe("formContent slice", () => {
  it("properly creates questionOne", () => {
    expect(reducer({}, updatedQuestionOne("mountains"))).toHaveProperty("questionOne", "mountains")
  })

  it("properly updates questionOne", () => {
    expect(reducer({questionOne: "beach"}, updatedQuestionOne("mountains"))).toHaveProperty("questionOne", "mountains")
  })

  it("properly creates questionTwo", () => {
    expect(reducer({}, updatedQuestionTwo("mountains"))).toHaveProperty("questionTwo", "mountains")
  })

  it("properly updates questionTwo", () => {
    expect(reducer({questionTwo: "beach"}, updatedQuestionTwo("mountains"))).toHaveProperty("questionTwo", "mountains")
  })
})
