## Homework Task

### Run

Run the application using

```sh
npm run dev
```

## Showcase

Once the app is running you will see the [Task Showcase](src/components/task/TaskShowcase/TaskShowcase.tsx) page which shows each task implementation in its respective tab.

## Solutions

### 1. Create a List Component

#### Location

[src/components/task/List](src/components/task/List/List.tsx)

#### Implementation

`List` component renders a card list of users provided by the JSONPlaceholder API. The data fetching is implemented using the `fetch` API, and the async state is managed by React Query. The component handles loading and error states.

The data fetching logic contains a layer for validating that the data returned by the JSONPlaceholder API matches the expected structure defined using Zod in the [schema](src/components/task/List/api/schema.ts) file.

#### Usage

Using the `List` component is as simple as writing:

```tsx
<List />
```

This can be seen in the [TaskShowcase](src/components/task/TaskShowcase/TaskShowcase.tsx) component.

### 2. Create a Form Generator Component

#### Location

[src/components/task/CreateForm](src/components/task/CreateForm.tsx)

#### Implementation

The `CreateForm` component combines React Hook Form, Zod and React Query to create an abstraction component which allows the user to easily create mutation forms with schema based validation and composable input fields.

`CreateForm` utilizes the Render Prop pattern through the `renderForm` function to implement the logic for composable input fields, allowing the user to provide their own UI form components and connect them to the internal form, which contains the user-defined Zod validation schema.

#### Usage

`CreateForm` requires the user to provide a Zod validation schema and define a React Query mutation before rendering the form, as seen in the [Form Generator showcase](src/components/task/TaskShowcase/FormGeneratorTab/FormGeneratorTab.tsx).

```tsx
<CreateForm<PostFormInputs>
    successMessage="Successfully created a post!"
    validationSchema={PostSchema}
    useMutation={useCreatePost}
    renderForm={({ register, errors }) => (
        <>
            <TextField
                required
                fullWidth
                id="title"
                label="Title"
                error={!!errors.title}
                helperText={errors.title?.message}
                {...register('title')}
            />
            <TextArea
                required
                fullWidth
                rows={6}
                id="body"
                label="Body"
                error={!!errors.body}
                helperText={errors.body?.message}
                {...register('body')}
            />
        </>
    )}
/>
```

### 3. Create a Page Generator Component

#### Location

[src/components/task/PageGenerator](src/components/task/PageGenerator/PageGenerator.tsx)

#### Implementation

The `PageGenerator` component allows the user to dynamically generate a simple page using a combination of layouts and components defined in their respective [maps](src/components/task/PageGenerator/maps.ts).

The component is designed to be easily extendable, allowing the developer to add new layouts and components to the maps, which users can then use to assemble pages. This is done by extending the [maps](src/components/task/PageGenerator/maps.ts) with new components.

Types defined in the [types.ts](src/components/task/PageGenerator/types.ts) file enable the user to know which props are available for the components they want to use to generate a page. The prop types are dynamically extracted from the component and layout maps, making them easier to extend.

#### Usage

`PageGenerator` is used by defining the sections a page contains using the available layouts and components. For easier type safety, `PageSection` type should be used when defining the page sections.

An example `PageSection` looks like this:

```ts
{
    type: 'layoutSection',
    props: { background: 'bg-white' },
    components: [
        {
            type: 'componentHero',
            props: {
                title: 'Page Generator Preview',
                image: '/media/hero.png',
            },
        },
    ],
},
```

The usage is demonstrated in the [showcase component](src/components/task/TaskShowcase/PageGeneratorTab.tsx).
