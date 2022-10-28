mod test;
use wasm_bindgen::prelude::*;
use crate::test::hello;
// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(hel:&str) {
    let init = "Hello, wasm-vue".to_string();
    let res =init +  &hel;
    alert(&res);
    hello();
}