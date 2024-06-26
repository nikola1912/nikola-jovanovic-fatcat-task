import { FC, PropsWithChildren } from 'react';

import { PAGE_COMPONENT_MAP, PAGE_SECTION_MAP } from './maps';
import { PageSection } from './types';

interface PageGeneratorProps {
    data: PageSection[];
}

export const PageGenerator: FC<PageGeneratorProps> = ({ data }) => {
    return (
        <>
            {data.map((pageSection, pageSectionIndex) => {
                // Props are already type checked on `PageGenerator` usage level
                // So here it's enough to know that `Section` is a component which accepts children
                const Section = PAGE_SECTION_MAP[
                    pageSection.type
                ] as FC<PropsWithChildren>;
                const sectionProps = pageSection.props;

                return (
                    <Section key={pageSectionIndex} {...sectionProps}>
                        {pageSection.components.map(
                            (pageComponent, pageComponentIndex) => {
                                // Same as with `Section` except we don't use `PropsWithChildren`
                                const Component = PAGE_COMPONENT_MAP[
                                    pageComponent.type
                                ] as FC;
                                const componentProps = pageComponent.props;

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
