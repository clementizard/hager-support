import React from 'react';
import { getLayout as getFullLayout } from '../LayoutFull';
import Component from './Component';

export const getLayout = page => getFullLayout(<Component>{page}</Component>);
export default Component;
