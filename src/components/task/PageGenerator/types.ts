import { ComponentProps } from 'react';
import { PAGE_SECTION_MAP, PAGE_COMPONENT_MAP } from './maps';

type PageSectionType = keyof typeof PAGE_SECTION_MAP;
type PageComponentType = keyof typeof PAGE_COMPONENT_MAP;

// Extracts individual section props based on provided section type
type PageSectionProps<T extends PageSectionType> = ComponentProps<
    (typeof PAGE_SECTION_MAP)[T]
>;

type PageComponentProps<T extends PageComponentType> = ComponentProps<
    (typeof PAGE_COMPONENT_MAP)[T]
>;

// Allows us to have type safe `props` based the section `type`
export type PageSection = {
    [K in PageSectionType]: {
        type: K;
        props: PageSectionProps<K>;
        components: PageComponent[];
    };
}[PageSectionType];

type PageComponent = {
    [K in PageComponentType]: {
        type: K;
        props: PageComponentProps<K>;
    };
}[PageComponentType];
