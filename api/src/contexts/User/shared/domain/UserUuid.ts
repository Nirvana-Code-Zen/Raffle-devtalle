import { Uuid } from '../../../shared/domain/value-objects/Uuid'

export function UserUuid (uuid: string): void {
  Uuid.call(this, uuid)
}
