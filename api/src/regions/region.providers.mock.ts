import RepositoryMock from "../test-utils/repository-mock.utils"
import { CreateRegionDto } from "./dto/create-region.dto"

const mockedRegionRepository = RepositoryMock({saveResolve: (dto: CreateRegionDto) => {
    if (dto.parentId) {
      const {parentId, regionOrder, ...props} = dto
      return {
        id: Math.floor(Math.random() * 100) + 1,
        ...props,
        region_order: regionOrder,
        parent: { id: parentId }
      }
    }
    const {regionOrder, ...props} = dto
    return {
      id: Math.floor(Math.random() * 100) + 1,
      region_order: regionOrder,
      ...props,
      parent: null
    }
  }})

export const regionProviders = [
    { provide: "REGION_REPOSITORY", useValue: mockedRegionRepository }
];

