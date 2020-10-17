type PropsType<C> = C extends React.ComponentType<infer P> ? P : never;
