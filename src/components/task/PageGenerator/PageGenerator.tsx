import { FC } from 'react';

import { PageSection } from './types';
import { PAGE_COMPONENT_MAP, PAGE_SECTION_MAP } from './maps';

interface PageGeneratorProps {
    data: PageSection[];
}

export const PageGenerator: FC<PageGeneratorProps> = ({ data }) => {
    return (
        <>
            {data.map((pageSection, pageSectionIndex) => {
                const Section = PAGE_SECTION_MAP[pageSection.type];
                // Props are already type checked on `PageGenerator` usage level, so we're safe to use `any` here
                const sectionProps = pageSection.props as any;

                return (
                    <Section key={pageSectionIndex} {...sectionProps}>
                        {pageSection.components.map(
                            (pageComponent, pageComponentIndex) => {
                                const Component =
                                    PAGE_COMPONENT_MAP[pageComponent.type];
                                // Same as with `sectionProps`
                                const componentProps =
                                    pageComponent.props as any;

                                return (
                                    <Component
                                        key={pageComponentIndex}
                                        {...componentProps}
                                    />
                                );
                            }
                        )}
                    </Section>
                );
            })}
        </>
    );
};
