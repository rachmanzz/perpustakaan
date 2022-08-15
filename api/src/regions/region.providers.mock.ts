import RepositoryMock from "../test-utils/repository-mock.utils"
import { CreateRegionDto } from "./dto/create-region.dto"

const mockedRegionRepository = RepositoryMock({saveResolve: (dto: any) => {
    return {
      id: Math.floor(Math.random() * 100) + 1,
      ...dto
    }
  }})

export const regionProviders = [
    { provide: "REGION_REPOSITORY", useValue: mockedRegionRepository }
];

