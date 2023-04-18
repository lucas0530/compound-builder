/// <reference types="react" />
/**
 * @Method: Returns the plural form of any noun.
 * @Param: {string}
 * @Return: {string}
 */
export declare function getPlural(str: any): string;
/**
 * 기존 컴파운드 컴포넌트 작성 방식은 매번 타입을 수기 작성하고 캐스팅해야했기 때문에 이를 함수로 제공하기 위해 작성하였습니다.
 *
 * @param LayoutComponent 컴파운드 컴포넌트의 부모 컴포넌트
 * @param CompoundComponent 컴파운드 컴포넌트 스타일 컴포넌트 객체
 * @returns
 */
export declare const compoundBuilder: <LayoutComponentType, CompoundComponentType extends Record<string, (import("react").FC<LayoutComponentType> & CompoundComponentType)[keyof CompoundComponentType]>>(LayoutComponent: import("react").FC<LayoutComponentType>, CompoundComponent: CompoundComponentType) => import("react").FC<LayoutComponentType> & CompoundComponentType;
