import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QueryParamsListing} from "../../model/query-params-listing";
import {DEFAULT_ACTIVE_PAGE, DEFAULT_PAGE_SIZE} from "../../common/const";
import {EventService} from "../../service/event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  dataList: any[] = [];
  queryParams: QueryParamsListing = {
    page: DEFAULT_ACTIVE_PAGE,
    size: DEFAULT_PAGE_SIZE
  }
  sortColumn: string[] = [];
  totalElements: number = 0;
  isLoadingData: boolean = true;
  constructor(private eventService: EventService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      // condition ? true : false;
      this.queryParams.page = params['page'] || DEFAULT_ACTIVE_PAGE; // Lấy ?page={page}
      this.queryParams.size = params['size'] || DEFAULT_PAGE_SIZE; // Lấy &size={size}
      this.loadEventData();
    });
  }

  loadEventData() {
    this.eventService.getEvents(this.queryParams).subscribe(res => {
      if (res) {
        this.totalElements = res.totalElements; // Tổng số phần tử
        this.queryParams.size = res.size; // Số phần tử của 1 page
        this.dataList = res.content;
        this.isLoadingData = false;
      }
    });
  }

  pageChange(pageNumber: number) {
    this.queryParams.page = pageNumber;
    this.router.navigate(['/app/events'], {queryParams: this.queryParams});
  }

  search() {
    this.queryParams.page = DEFAULT_ACTIVE_PAGE;
    this.router.navigate(['/app/events'], {queryParams: this.queryParams});
  }

  sort(direction: string | null, column: string) {
    console.log(column, direction);
    // {direction: string, column: string}
    this.sortColumn = this.sortColumn.map(item => item.startsWith('-') ? item.substring(1) : item)
                                    .filter(item => item !== column);
    if (direction) {
      this.sortColumn.push(direction === 'descend' ? `-${column}` : column);
    }
    this.queryParams.sort = this.sortColumn;
    this.queryParams.page = DEFAULT_ACTIVE_PAGE;
    this.router.navigate(['/app/events'], {queryParams: this.queryParams});
  }
}
