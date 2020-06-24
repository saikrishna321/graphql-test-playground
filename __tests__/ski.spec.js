import find from '../api/graphqlApi';

const LiftStatus = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
}

it('Should be able to fine ski resorts', async () => {
  await find.skiResorts(async ({ lift, trail }) => {
    lift.shouldHaveLiftCapacity(8);
    lift.shouldHaveStatus(LiftStatus.OPEN);
    lift.shouldHaveName('Panorama');
    
    trail.isTrees(true);
  });
});
