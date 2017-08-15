import {request} from 'Utils';

export async function QUERY(id) {
  return request(`house/${id}`);
}