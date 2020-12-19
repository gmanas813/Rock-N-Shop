import {createSelector} from 'reselect';
const dirSelector = state => state.directory;

export const selectDir = createSelector(
    [dirSelector],
    directory => directory.sections
);
