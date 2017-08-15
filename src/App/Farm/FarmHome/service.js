import {request} from 'Utils';

export async function VILLAGE() {
  return request(`village/1`);
}

export async function HOUSES() {
  return request(`houses/1`);
}

export async function RESTAURANTS() {
  return request(`restaurants/1`);
}

export async function ORCHARDS() {
  return request(`orchards/1`);
}