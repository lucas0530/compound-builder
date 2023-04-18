"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compoundBuilder = exports.getPlural = void 0;
const pluralize = require("pluralize");
/**
 * @Method: Returns the plural form of any noun.
 * @Param: {string}
 * @Return: {string}
 */
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
/**
 * 기존 컴파운드 컴포넌트 작성 방식은 매번 타입을 수기 작성하고 캐스팅해야했기 때문에 이를 함수로 제공하기 위해 작성하였습니다.
 *
 * @param LayoutComponent 컴파운드 컴포넌트의 부모 컴포넌트
 * @param CompoundComponent 컴파운드 컴포넌트 스타일 컴포넌트 객체
 * @returns
 */
const compoundBuilder = (LayoutComponent, CompoundComponent) => {
    const _layout = LayoutComponent;
    Object.entries(CompoundComponent).forEach(([layoutName, layoutComponent]) => {
        _layout[layoutName] = layoutComponent;
    });
    return _layout;
};
exports.compoundBuilder = compoundBuilder;
