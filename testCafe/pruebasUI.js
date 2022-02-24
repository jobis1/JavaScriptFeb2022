import { feature } from "caniuse-lite";
import pagina from "./pageObjectModel";

fixture("Pruebas de UI usando testCafe para practicar de Nodejs").page(
  "https://devexpress.github.io/testcafe/example/"
);

test("Prueba1: abrir una pagina de pruebas", async (t) => {
  await t.wait(1000);
});

test("Pruebas2: Escribir un texto", async (t) => {
  await t
    .typeText(pagina.nameInput, "Tester")
    //Asertions
    .expect(pagina.nameInput.value)
    .eql("Tester");
});

test("Pruebas3: Escribir numeros", async (t) => {
  await t
    .typeText(pagina.nameInput, "78521")
    //Asertions
    .expect(pagina.nameInput.value)
    .eql("78521")
    .expect(pagina.nameInput.value)
    .notEql("Tester");
});

test("Pruebas4: Escribir signos", async (t) => {
  await t
    .typeText(pagina.nameInput, "%^%&%$")
    //Asertions
    .expect(pagina.nameInput.value)
    .eql("%^%&%$")
    .expect(pagina.nameInput.value)
    .notEql("Tester");
});

test("Pruebas5: Usar una variable y un if de pruebas", async (t) => {
  let variable = 78676;
  await t.click(pagina.nameInput);
  if (typeof varible == "number") {
    await t.expect(pagina.nameInput.value).eql("");
  } else {
    await t
      .typeText(pagina.nameInput, "76876")
      .expect(pagina.nameInput.value)
      .eql("76876");
  }
});

test("Pruebas6: Escribir un texto y borrar y reemplazar una sola letra", async (t) => {
  await t
    .expect(pagina.nameInput.value).eql("")
    .typeText(pagina.nameInput, "QA")
    .typeText(pagina.nameInput, "Teter", { replace: true })
    .typeText(pag.nameInput, "s", { caretPos: 2 })

    //Assertion

    .expect(pagina.nameInput.value)
    .notEql("Texter")
    .expect(pagina.nameInput.value)
    .notEql("QA")
    .expect(pagina.nameInput.value)
    .contains("Test")
    .expect(pagina.nameInput.value)
    .eql("Tester");
});


test("Pruebas7: Escribir un texto y borrar y reemplazar una sola letra", async t => {
    await t
      .expect(pagina.nameInput.value).eql("")
      .typeText(pagina.nameInput, "Texter")
      .pressKey('ctrl+a delete', { replace: true })
      .typeText(pagina.nameInput, 'Tester')
  
      //Assertion
  
      .expect(pagina.nameInput.value).notEql("Texter")
      .expect(pagina.nameInput.value).notEql("QA")
      .expect(pagina.nameInput.value).contains("Test")
      .expect(pagina.nameInput.value).eql("Tester");
  });

  test("Pruebas8: clic check box", async t => {
    await t
    .expect(pagina.checkbox1.checked).notOk()
    .click(pagina.checkbox1)
    .expect(pagina.checkbox1.checked).ok()
  });


  test("Pruebas9: clic check box", async t => {
    for( const feature of pagina.featureList){
        await t
   .click(feature.label)
   .wait(500)
   .expect(feature.checkbox.checked).ok()
    }
  });

  test("Pruebas10: clic check box", async t => {
        await t
   .expect(pagina.radio_windows).notOk()
   .click(feature.radio_windows)
   .expect(pagina.radio_windows.checked).ok()
  });