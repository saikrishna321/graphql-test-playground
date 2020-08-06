import { LiftStatus } from "../enums/liftStatuses";

export interface ILiftAssertions {
    shouldHaveLiftCapacity: (number: number) => void
    shouldHaveStatus: (status: LiftStatus) => void
    shouldHaveName: (name: string) => void
}